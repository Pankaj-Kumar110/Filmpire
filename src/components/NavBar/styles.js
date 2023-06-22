import { makeStyles } from '@mui/styles';

const drawerWidth = 240;

export default makeStyles((theme) => ({
    toolbar: {
        height: '80px',
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: '240px', //240px left for the sidebar
        [theme.breakpoints.down('sm')]: {
            marginLeft: 0,
            flexWrap: 'wrap',
        }, //affects only devices 'smaller' than small or small devices
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    drawerPaper: {
        width: drawerWidth
    },
    linkButton: {
        '&:hover': {
            color: 'white !important',
            textDecoration: 'none',
        }
    }
}));