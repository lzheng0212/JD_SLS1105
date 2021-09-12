import "./AdminPortal.css";
import CreatePostButton from "../component/postComponents/createPostButton";
import { Button } from "../component/Button";
import Countvisitor from "../component/postComponents/visitorCuntor";

function AdminPortal() {
  return (
    <div>
      <h1 className="portal_h1">Admin Portal</h1>
      <div className="button-wrapper" id="one">
        <CreatePostButton />

        <Button buttonStyle="btn--primary" buttonSize="btn--huge">
          Draft
        </Button>

        <Button buttonStyle="btn--primary" buttonSize="btn--huge">
          Setting
        </Button>
      </div>

      <div className="button-wrapper">
        {/* <canvas id="box" width="20" height="30"  
                    style="position: absolute; top:0; left:0; border:3px solid black;">
                </canvas>  */}

        <Button
          buttonStyle="btn--primary"
          buttonSize="btn--huge"
          path="./manage"
        >
          Manage Old Posts
        </Button>

        <Button buttonStyle="btn--primary" buttonSize="btn--huge">
          XXXXX
        </Button>

        <Button buttonStyle="btn--primary" buttonSize="btn--huge">
          XXX
        </Button>
      </div>

      <div className="button-wrapper">
        <div id="CounterVisitor">
          <p>This page has</p>
          <h1 id="count">0</h1>
          <p>Views</p>
        </div>

        <Button buttonStyle="btn--primary" buttonSize="btn--huge">
          XXX
        </Button>
      </div>

      {/* <div>
                <Countvisitor/>
            </div> */}
    </div>
  );
}

export default AdminPortal;
