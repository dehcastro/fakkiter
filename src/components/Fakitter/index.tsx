import React from 'react';
import {
  FakitterAuthor,
  FakitterContainer,
  FakitterContent,
  FakitterHeader,
  FakitterText,
  FakitterUsername,
} from './styles';
import {Fakitter} from '../../services/fakitters';
// import Avatar from '../Avatar';

type FakitterProps = {
  fakitter: Fakitter;
};
const FakitterComp = ({fakitter}: FakitterProps) => {
  return (
    <FakitterContainer>
      {/*<Avatar user={fakitter.user} size={40} />*/}
      <FakitterContent>
        <FakitterHeader>
          <FakitterAuthor>{fakitter.user.name}</FakitterAuthor>
          <FakitterUsername> @{fakitter.user.username}</FakitterUsername>
        </FakitterHeader>
        <FakitterText>{fakitter.text}</FakitterText>
      </FakitterContent>
    </FakitterContainer>
  );
};

export default FakitterComp;
