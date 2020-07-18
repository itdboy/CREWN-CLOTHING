import React from 'react';
import './homepage.styles.scss';
import Directory from '../../components/directory/directory.component';
// import { useHistory } from 'react-router-dom';

const HomePage = ({history}) =>(
    <div className='homepage'>
          <Directory history={history} />
    </div>
);

export default HomePage;