import './AdminPortal.css'
import CreatePostButton from '../component/postComponents/createPostButton';

function AdminPortal() {
    return (
        <div>
            <h1 className='portal_h1'>Admin Portal</h1>
            <div className='button-wrapper'>
                <CreatePostButton/>
            </div>
        </div>
    );
}

export default AdminPortal;