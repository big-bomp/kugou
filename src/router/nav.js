
import Nav from '@/components/Nav/Nav.vue'
import NewSong from '@/views/NewSong/NewSong.vue'
import Rank from '@/views/Rank/Rank.vue'
import Plist from '@/views/Plist/Plist.vue'
import  Singer from '@/views/Singer/Singer.vue'

//四个路由规则 单独放一个文件里
const NavRoutes = [{
    path: "/",
    name: 'NewSong',
    meta:{
        title:"新歌"
    },
    components: {
        default: NewSong,
        nav: Nav
    }
}, {
    path: "/rank",
    name: 'Rank',
    meta:{
        title:"排行"
    },
    components: {
        default: Rank,
        nav: Nav
    }
}, {
    path: "/plist",
    name: 'Plist',
    meta:{
        title:"歌单"
    },
    components: {
        default: Plist,
        nav: Nav
    }
}, {
    path: "/singer",
    name: 'Singer',
    meta:{
        title:"歌手"
    },
    components: {
        default: Singer,
        nav: Nav
    }
}];
export default NavRoutes