import {createDrawerNavigator} from 'react-navigation';
import todoTask from '../Screens/todoTask';
import doneTask from '../Screens/doneTask';
import drawerContentComponents from './drawerContentComponents';

export const DrawerNav = createDrawerNavigator (
    
    {
        todoTask:{ screen: todoTask },
        doneTask:{ screen: doneTask },   

    },
    {
       contentComponent: drawerContentComponents
    });