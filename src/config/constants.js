import { Platform } from 'react-native';

const PORT = '1440';


const android = `http://localhost:${PORT}`;
//PLEASE ENTER IP ADDRESS OF YOUR SYSTEM

const ios = `http://localhost:${PORT}/`;

export const SERVER_URL = Platform.select({
	ios,
	android
});

export const IMAGE_URL = 'https://cdn.pixabay.com/photo/2016/11/29/04/19/beach-1867285_960_720.jpg';