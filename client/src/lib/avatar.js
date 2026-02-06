import char1 from "@/assets/Avatar/char1.png";
import char2 from "@/assets/Avatar/char2.png";
import char3 from "@/assets/Avatar/char3.png";
import char4 from "@/assets/Avatar/char4.png";
import char5 from "@/assets/Avatar/char5.png";
import char6 from "@/assets/Avatar/char6.png";
import char7 from "@/assets/Avatar/char7.png";
import char8 from "@/assets/Avatar/char8.png";
import char9 from "@/assets/Avatar/char9.png";
import char10 from "@/assets/Avatar/char10.png";

// We use an array where index matches the ID.
// We put 'null' at index 0 so that avatars[1] is char1.
export const avatarMap = [
  null,
  char1,
  char2,
  char3,
  char4,
  char5,
  char6,
  char7,
  char8,
  char9,
  char10,
];

export function getAvatar(id) {
  // Return char1 if id is invalid or missing
  return avatarMap[id] || avatarMap[1];
}

export function getUserAvatar(user) {
  if (!user) return avatarMap[1];
  return user.avatar?.imageUrl || getAvatar(user.avatarId);
}
