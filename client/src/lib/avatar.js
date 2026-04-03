import char1 from "@/assets/Avatar/char1.webp";
import char2 from "@/assets/Avatar/char2.webp";
import char3 from "@/assets/Avatar/char3.webp";
import char4 from "@/assets/Avatar/char4.webp";
import char5 from "@/assets/Avatar/char5.webp";
import char6 from "@/assets/Avatar/char6.webp";
import char7 from "@/assets/Avatar/char7.webp";
import char8 from "@/assets/Avatar/char8.webp";
import char9 from "@/assets/Avatar/char9.webp";
import char10 from "@/assets/Avatar/char10.webp";

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
