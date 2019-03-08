import { db } from '../Firebase/Firebase';

const propRef = db.collection('properties')

// export const doGetProperty = (id) =>
// //grab doc with that id and get it
//     propRef
//         .doc(id)
//         .get()
export const editProperty = (id) =>
//grab doc with that id and get it
    propRef
        .doc(id)
        .get()
export const deleteProperty = (id) =>
//grab doc with that id and get it
    propRef
        .doc(id)
        .delete()

export const doGetProperty = (id) =>
    propRef
        .doc(id)
        .get()



