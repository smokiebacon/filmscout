import { storage } from '../Firebase/Firebase';

const storageRef = storage.ref()

export const storeFile = (file) =>
  storageRef.child(file.name).put(file)

export const getFile = (name) =>
  storageRef
    .child(name)
    .getDownloadURL()
    .then(file => file)

export {
    storage
}