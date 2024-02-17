import LikeButton from "./tags";
import {Goals} from "./tags";
import {Income} from "./tags";

function Header({title}) {
        return <h1>{title ? title : 'Default Title'}</h1>
}

export default function HomePage() {

    return (
        <div>
            <Header title="Welcome to nextChaptr" />
            <Goals />
            <Income />
            {/* <LikeButton /> */}
        </div>
    );
}
