import React from "react"; 
import Link from'next/link';

function GetLink(props) {
return (
<>
<Link href={`/secondPage?content=${props.title}`}> {props.title}</Link>
</>
);
}
export default GetLink;