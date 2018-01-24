import React, { Component } from 'react';
import { Config } from './config';
import MobileTearSheet from './MobileTearSheet';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { indigo500 } from 'material-ui/styles/colors';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';
import ContactList from './ContactList';


class Contacts extends Component {

  constructor() {
    super();
    this.state = {
      list: []
    }
  }

  componentDidMount() {
    let url = Config.apiUrl;
    fetch(url)
    fetch(url)
      .then(response => response.json())
      .then(({ contacts: list }) => this.setState({ list }))
      // we fetch an object literal, no iterable, we assign contacts
      // to list variable so we can iterate it.
      .catch(err => console.error(err));
  }

  render() {
    return (
      <div>
        <MobileTearSheet >
          <List>
             <div>
                <MobileTearSheet >
                    <List>
            <ContactList contacts={this.state.list}/>
            </List>
                </MobileTearSheet>
            </div>            
          </List>
        </MobileTearSheet>
      </div>
    )
  }
}


export default Contacts;
