import Todolist from "../components/test/todolist"
import Home from "../components/Home"
import Style from "../components/Style"
import Img from "../components/Img"
import Forlist from "../components/for"
import Click from "../components/click"
import Sd from "../components/setState"
import Form from '../components/form'
import Zujian from '../components/component/componentFather'
import Ajax from '../components/ajax'
import LifeFather from '../components/life/lifeFather'
import Luyou from '../components/router/router'
import Routerson from "../components/router/routerSon"
import RouterGet from "../components/router/routerGet"
import RouterJs from "../components/router/routerjs"
import RouterQtFather from "../components/router/routerqt/routerQtFather"
import RouterQtSon1 from "../components/router/routerqt/routerQtSon1"
import RouterQtSon2 from "../components/router/routerqt/routerQtSon2"
import RouterQtSun1 from "../components/router/routerqt/routerQtSun1"
let router = [{
        path: "/",
        component: Home,
        exact: true
    },
    {
        path: "/Style",
        component: Style
    },
    {
        path: "/Img",
        component: Img
    },
    {
        path: "/Forlist",
        component: Forlist
    },
    {
        path: "/Click",
        component: Click
    },
    {
        path: "/Sd",
        component: Sd
    },
    {
        path: "/Form",
        component: Form
    },
    {
        path: "/Ajax",
        component: Ajax
    },
    {
        path: "/Todolist",
        component: Todolist
    },
    {
        path: "/life",
        component: LifeFather

    }, {
        path: "/Zujian",
        component: Zujian
    },
    {
        path: "/Luyou",
        component: Luyou
    },
    {
        path: "/Routerson/:aid",
        component: Routerson
    },
    {
        path: "/RouterGet",
        component: RouterGet
    },
    {
        path: "/RouterJs",
        component: RouterJs
    },
    {
        path: "/RouterQtFather",
        component: RouterQtFather,
        routes: [{
            path: "/RouterQtFather",
            component: RouterQtSon1,
            routes: [{
                path: "/RouterQtFather/RouterQtSon1/RouterQtSun1",
                component: RouterQtSun1,
            }]
        }, {
            path: "/RouterQtFather/RouterQtSon2",
            component: RouterQtSon2,
        }]
    }
]
export default router;