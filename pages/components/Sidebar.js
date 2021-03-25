import { Avatar, IconButton, Button } from "@material-ui/core";
import styled from "styled-components";
import ChatIcon from "@material-ui/icons/chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import * as EmailValidator from "email-validator";
import { auth } from "../../firebase";

function Sidebar() {
  const createChat = () => {
    const input = prompt(
      "please enter an email address for the user you wish to chat with"
    );

    if (!input) return null;

    if (EmailValidator.validate(input)) {
      //we need to add the chat into the DB 'chats' collection
    }
  };

  return (
    <Container>
      <Header>
        <UserAvatar onClick={() => auth.signOut()} />

        <IconContainer>
          <IconButton>
            <IconButton>
              <ChatIcon />
            </IconButton>
            <MoreVertIcon />
          </IconButton>
        </IconContainer>
      </Header>

      <Search>
        <SearchIcon />
        <SeearchInput placeholder="Search in chats" />
      </Search>

      <SidebarButton onClick={createChat}>START A NEW CHAT</SidebarButton>

      {/* list of chat */}
    </Container>
  );
}

export default Sidebar;

const Container = styled.div``;

const Search = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 2px;
`;

const SidebarButton = styled(Button)`
  width: 100%;

  &&& {
    border-top: 1px solid whitesmoke;
    border-bottom: 1px solid whitesmoke;
  }
`;

const SeearchInput = styled.input`
  outline-width: 0;
  border: none;
  flex: 1;
`;

const Header = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 1;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  height: 80px;
  border-bottom: 1px solid whitesmoke;
`;
const UserAvatar = styled(Avatar)`
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;
const IconContainer = styled.div``;
