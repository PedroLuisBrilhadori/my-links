export interface ProfileModel {
  name: string;
  tags: string;
  photo: string;
  cards: string;
}

export const Profile: ProfileModel = {
  name: "profile/name",
  tags: "profile/tags",
  photo: "profile/photo",
  cards: "cards",
};
