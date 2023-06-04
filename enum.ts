enum EnumRoles {
  ADMIN,
  GUEST,
  USER,
}

interface IUser {
  role: EnumRoles;
  color: EnumColors;
}

const enum EnumColors {
  black,
  pink,
  green,
}

const user: IUser = {
  role: EnumRoles.ADMIN,
  color: EnumColors.black,
};
