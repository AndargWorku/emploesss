import React from "react";
import { NormalText } from "../../../globalStyles";
import {
  Badge,
  DetailWrapper,
  Information,
  NamePositionContainer,
  ProfileContainer,
} from "./detailStyles";

import { MdDateRange, MdOutlineEmail } from "react-icons/md";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { BiDollarCircle } from "react-icons/bi";
import { ImEnter } from "react-icons/im";
import { FaAddressCard } from "react-icons/fa";
import { employee } from "../../../store/slice/employeeSlice";

interface Props {
  user: employee | undefined;
}

const Detail: React.FC<Props> = ({ user }) => {
  return (
    <DetailWrapper>
      <ProfileContainer>
        <img
          src={
            user?.profile_img
              ? user?.profile_img
              : "https://media.istockphoto.com/vectors/profile-placeholder-image-gray-silhouette-no-photo-vector-id1016744004?k=20&m=1016744004&s=612x612&w=0&h=Z4W8y-2T0W-mQM-Sxt41CGS16bByUo4efOIJuyNBHgI="
          }
          width="95px"
          height="95px"
          style={{
            borderRadius: "3rem",
          }}
          alt="N"
        />
        <NamePositionContainer>
          <NormalText fs="13" fw="400" color="#000">
            {user?.full_name}
            {user?.gender === "male" ? (
              <BsGenderMale
                style={{
                  background: "transparent",
                  color: "black",
                }}
                size="1.5rem"
              />
            ) : (
              <BsGenderFemale
                style={{
                  background: "transparent",
                  color: "black",
                }}
                size="1.5rem"
              />
            )}
          </NormalText>
          <Badge>
            <NormalText fs="10" fw="400" color="#7ec581">
              {user?.position}
            </NormalText>
          </Badge>
        </NamePositionContainer>
      </ProfileContainer>
      <Information>
        <MdDateRange
          style={{
            background: "transparent",
            color: "black",
          }}
          size="1.5rem"
        />
        <NormalText fs="10"> {user?.date_of_birth}</NormalText>
      </Information>
      <Information>
        <MdOutlineEmail
          style={{
            background: "transparent",
            color: "black",
          }}
          size="1.5rem"
        />
        <NormalText fs="10" type="email">
          {user?.email}
        </NormalText>
      </Information>
      <Information>
        <BiDollarCircle
          style={{
            background: "transparent",
            color: "black",
          }}
          size="1.5rem"
        />
        <NormalText fs="10"> {user?.salary}ETB </NormalText>
      </Information>
      <Information>
        <ImEnter
          style={{
            background: "transparent",
            color: "black",
          }}
          size="1.5rem"
        />
        <NormalText fs="10"> {user?.joined_date} </NormalText>
      </Information>
      <Information>
        <FaAddressCard
          style={{
            background: "transparent",
            color: "black",
          }}
          size="1.5rem"
        />
        <NormalText fs="10"> {user?.address} </NormalText>
      </Information>
    </DetailWrapper>
  );
};

export default Detail;
