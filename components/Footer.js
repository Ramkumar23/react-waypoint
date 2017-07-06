/**
 * Created by ramkumar on 6/7/17.
 */
import React from 'react';
import { Row, Image} from 'react-bootstrap';

const git= `
data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUxMiA1MTIiIGhlaWdodD0iNTEycHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnPjxwYXRoIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTI5Ni4xMzMsMzU0LjE3NGM0OS44ODUtNS44OTEsMTAyLjk0Mi0yNC4wMjksMTAyLjk0Mi0xMTAuMTkyICAgYzAtMjQuNDktOC42MjQtNDQuNDQ4LTIyLjY3LTU5Ljg2OWMyLjI2Ni01Ljg5LDkuNTE1LTI4LjExNC0yLjczNC01OC45NDdjMCwwLTE4LjEzOS01Ljg5OC02MC43NTksMjIuNjY5ICAgYy0xOC4xMzktNC45ODMtMzguMDktOC4xNjMtNTYuNjgyLTguMTYzYy0xOS4wNTMsMC0zOS4wMTEsMy4xOC01Ni42OTcsOC4xNjNjLTQzLjA4Mi0yOC41NjctNjEuMjItMjIuNjY5LTYxLjIyLTIyLjY2OSAgIGMtMTIuMjQxLDMwLjgzMy00Ljk4Myw1My4wNTctMi43MTgsNTguOTQ3Yy0xNC4wNjEsMTUuNDItMjIuNjc3LDM1LjM3OS0yMi42NzcsNTkuODY5YzAsODYuMTYzLDUzLjA1NywxMDQuMzAxLDEwMi45NDIsMTEwLjE5MiAgIGMtNi4zNDQsNS40NTItMTIuMjQxLDE1Ljg3My0xNC41MDcsMzAuMzg3Yy0xMi43MDIsNS40MzgtNDUuODA4LDE1Ljg3My02NS43NTgtMTguNTkyYzAsMC0xMS43OTUtMjEuMzEtMzQuMDEyLTIyLjY2OSAgIGMwLDAtMjIuMjI0LTAuNDUzLTEuODEzLDEzLjU5MmMwLDAsMTQuOTYsNi44MTIsMjQuOTQzLDMyLjY1M2MwLDAsMTMuNiw0My4wODksNzYuMTc5LDI5LjQ4djM4LjU0MyAgIGMwLDUuOTA2LTQuNTMsMTIuNzAyLTE1Ljg2NSwxMC44OUM5Ni4xMzksNDM4Ljk3NywzMi4yLDM1NC42MjYsMzIuMiwyNTUuNzdjMC0xMjMuODA3LDEwMC4yMTYtMjI0LjAyMiwyMjQuMDMtMjI0LjAyMiAgIGMxMjMuMzQ3LDAsMjI0LjAyMywxMDAuMjE2LDIyMy41NywyMjQuMDIyYzAsOTguODU2LTYzLjk0NiwxODIuNzU0LTE1Mi44MjgsMjEyLjY4OGMtMTEuMzQyLDIuMjY2LTE1Ljg3My00LjUzLTE1Ljg3My0xMC44OSAgIFYzOTUuNDVDMzExLjEsMzc0LjU3NywzMDQuMjg4LDM2MC45ODUsMjk2LjEzMywzNTQuMTc0TDI5Ni4xMzMsMzU0LjE3NHogTTUxMiwyNTYuMjNDNTEyLDExNC43MywzOTcuMjYzLDAsMjU2LjIzLDAgICBDMTE0LjczLDAsMCwxMTQuNzMsMCwyNTYuMjNDMCwzOTcuMjYzLDExNC43Myw1MTIsMjU2LjIzLDUxMkMzOTcuMjYzLDUxMiw1MTIsMzk3LjI2Myw1MTIsMjU2LjIzTDUxMiwyNTYuMjN6IiBmaWxsPSIjMEQyNjM2IiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L2c+PC9zdmc+
`
export default class Header extends React.Component {
    render() {
        return (
            <Row>
                <div style={{float: 'left'}}>
                    <span style={{color: 'white'}}>
                       &nbsp; &copy; &nbsp;All Copyrights &nbsp; Reserved to  &nbsp;
                        <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/Ramkumar23">
                            Ramkumar
                        </a>
                    </span>
                </div>
                <div style={{float: 'left', padding: '0px 15%'}}>
                    <span style={{color: 'blue'}}>
                        This Page using &nbsp;
                        <span>
                            <a target="_blank" rel="nofollow noopener noreferrer"
                                   href="https://facebook.github.io/react">
                                <Image
                                    src="https://facebook.github.io/react/img/logo_small_gray.png" />
                            </a>
                        </span>
                        &nbsp;
                        &amp;
                        &nbsp;
                        <span>
                            <a target="_blank" rel="nofollow noopener noreferrer"
                               href="https://github.com/zeit/next.js">
                                <Image
                                    width={64}
                                    src="https://cloud.githubusercontent.com/assets/50838/24116055/7076ba9c-0dcb-11e7-93d0-ba8f9ac8f6e4.png" />
                            </a>
                        </span>
                        &nbsp;
                        &amp;
                        &nbsp;
                        <span>
                            <a target="_blank" rel="nofollow noopener noreferrer"
                               href="https://react-bootstrap.github.io">
                                <Image
                                    width={32}
                                    src="https://react-bootstrap.github.io/assets/logo.png" />
                            </a>
                        </span>
                    </span>
                </div>
                <div style={{float: 'right'}}>
                    <span style={{color: 'white'}}>
                       &nbsp; &copy; &nbsp;Get in touch with me on &nbsp;
                        <a target="_blank" rel="nofollow noopener noreferrer" href="https://github.com/Ramkumar23">
                            Ramkumar
                        </a>
                    </span>
                </div>
            </Row>

        );
    }
}