import { atom } from "jotai";

export const notificationAtom = atom({
  title: "",
  message: "",
  active: false
});

export const addNotifcationAtom = atom(null, (_get, set, input) => {
  set(notificationAtom, () => {
    const {title, message, active} = input
    return {title, message, active};
  });

  setTimeout(() => {
    set(notificationAtom, () => {
      // const {title, message, active} = input
      return {title: "", message: "", active: false};
    });
  }, 5000)
})

export const closeNotifcationAtom = atom(null , (_get, set, input) => {
  set(notificationAtom, () => {
    return {title: "", message: "", active: false};
  })
})