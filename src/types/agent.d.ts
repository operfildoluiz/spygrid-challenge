export interface Agent {
  firstName: string;
  lastName: string;
  codename: string;
  city: string;
  state: string;
  country: string;
  gender: string;
  dob: string;
  eyeColor: string;
  timezone: {
    offset: string;
    description: string;
  };
  largePhoto: string;
}
