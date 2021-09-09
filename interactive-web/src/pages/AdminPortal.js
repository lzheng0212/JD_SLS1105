import './AdminPortal.css'
import CreatePostButton from '../component/postComponents/createPostButton';

function AdminPortal() {
    return (
        <div>
            <h1 className='portal_h1'>Admin Portal</h1>
            <div className='button_grid'>
                <div className='post_create'>
                    <CreatePostButton/>
                </div>
            </div>
        </div>
    );
}

export default AdminPortal;