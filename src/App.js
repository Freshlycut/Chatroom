import React, { useState, useEffect } from "react";
import "./App.css";

import Messages from "./components/MessageStructure/Messages";
import Input from "./components/MessageInput/Input";
import Navigation from "./components/NavigationInfo/Navigation";
import Footer from "./components/AboutInfo/Footer";

import ActiveUsers from "./components/Users/ActiveUsers";
import randomName from "./components/Helpers/RandomName";

import Container from "react-bootstrap/Container";

function App() {
  const initialState = {
    text: [],
    member: {
      username: randomName(),
    },
    activeUsers: [],
  };

  const [state, setState] = useState(initialState);
  const [drone, setDrone] = useState(null);

  const [uniqueActiveUsers, setUniqueActiveUsers] = useState(new Set());

  const updateActiveUsers = (members) => {
    const activeUsers = members.map((member) => ({
      username: member.clientData.username,
      avatar: member.clientData.avatar,
    }));

    const uniqueUsersSet = new Set(activeUsers.map((user) => user.username));
    setUniqueActiveUsers(uniqueUsersSet);

    setState((prevState) => ({ ...prevState, activeUsers }));
  };

  useEffect(() => {
    const newDrone = new window.Scaledrone("AhEtxLDevMY9pR3y", {
      data: state.member,
    });

    setDrone(newDrone);
    const room = newDrone.subscribe("observable-room");

    newDrone.on("open", (error) => {
      if (error) {
        return console.error(error);
      }
      const member = { ...state.member };
      member.id = newDrone.clientId;
      setState((prevState) => ({ ...prevState, member }));
    });

    room.on("data", (data, member) => {
      setState((prevState) => {
        const newMessages = [...prevState.text, { member, text: data }];
        return { ...prevState, text: newMessages };
      });
    });

    room.on("members", (members) => {
      updateActiveUsers(members);
    });

    return () => {
      room.unsubscribe();
      newDrone.close();
    };
  }, []);

  const onSendMessage = (message) => {
    drone.publish({
      room: "observable-room",
      message,
    });
  };

  return (
    <Container className="group-container">
      <div className="App">
        <Navigation />
        <div className="text-container">
          <Messages text={state.text} currentUser={state.member} />
        </div>
        <Input onSendMessage={onSendMessage} />
        <div className="active-user-container">
          <ActiveUsers
            activeUsers={Array.from(uniqueActiveUsers).map((username) =>
              state.activeUsers.find((user) => user.username === username)
            )}
            updateActiveUsers={updateActiveUsers}
          />
        </div>
      </div>
      <Footer />
    </Container>
  );
}

export default App;
