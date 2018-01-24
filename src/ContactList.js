import React, { Component } from 'react';
import { Config } from './config';
import MobileTearSheet from './MobileTearSheet';
import { List, ListItem } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import CommunicationCall from 'material-ui/svg-icons/communication/call';
import CommunicationChatBubble from 'material-ui/svg-icons/communication/chat-bubble';
import { indigo500 } from 'material-ui/styles/colors';
import CommunicationEmail from 'material-ui/svg-icons/communication/email';

class ContactList extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        let contacts = this.props.contacts;
        let list = contacts.map((contact, index) => {
            return (
                <div key={contact.name.toString()}>
                    <Divider />
                    <ListItem primaryText={contact.name} />
                    <ListItem
                        leftIcon={<CommunicationCall color={indigo500} />} primaryText={contact.phone_number}
                        secondaryText={contact.address}
                    />
                    <Divider />
                </div>

            )
        })
        return (
            <div>
                {list}
            </div>
        )
    }
}


export default ContactList;
