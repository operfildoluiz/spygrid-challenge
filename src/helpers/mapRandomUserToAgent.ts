import { Agent } from "../types/agent";
import { getRandomEyeColor } from "./getRandomEyeColor";

const mapRandomUserToAgent = (user: any): Agent => {
  return {
    firstName: user.name.first,
    lastName: user.name.last,
    codename: user.login.username,
    city: user.location.city,
    state: user.location.state,
    country: user.location.country,
    gender: user.gender,
    dob: user.dob.date,
    timezone: {
      offset: user.location.timezone.offset,
      description: user.location.timezone.description,
    },
    eyeColor: getRandomEyeColor(),
    largePhoto: user.picture.large,
    coordinates: {
      latitude: user.location.coordinates.latitude,
      longitude: user.location.coordinates.longitude,
    },
    address: `${user.location.street.number} ${user.location.street.name}`,
  };
};

export default mapRandomUserToAgent;
