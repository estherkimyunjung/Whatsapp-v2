import styled from "styled-components";
import Head from "next/head";
import Sidebar from "../components/Sidebar";

function Chat({}) {
  return (
    <Container>
      <Head>
        <title>Chat</title>
      </Head>
      <Sidebar />
    </Container>
  );
}

export default Chat;

const Container = styled.div`
  display: flex;
`;
