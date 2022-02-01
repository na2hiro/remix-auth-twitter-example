import {Link} from "@remix-run/react";

export default function TosAndPrivacy () {
  return (
    <div>
      <h1>Terms of Service & Privacy policy</h1>
        <ul>
            <li>
                We don't use your personal information for anything, because this app is for demonstration purposes only.
            </li>
            <li>
                We don't store any personal information on our servers, it stores only in cookies in your browser.
            </li>
        </ul>
        <Link to={"/"}>Bank to top</Link>
    </div>
  );
};