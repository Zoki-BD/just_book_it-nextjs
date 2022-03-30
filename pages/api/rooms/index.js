import nc from 'next-connect';

import { allRooms, newRoom } from '../../../controllers/roomControllers';
import dbConnect from '../../../config/dbConnect';
import { isAuthenticatedUser, authorizeRoles } from '../../../middlewares/auth'



const handler = nc();

//Vo express we have file app.js. In Next we call dbConnect() in every api route
dbConnect();

handler.get(allRooms);


handler
   .use(isAuthenticatedUser, authorizeRoles('admin'))
   .post(newRoom)




export default handler;

