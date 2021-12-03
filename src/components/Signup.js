import { Form, Input, Button } from 'antd';
import { Link } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';
import {db} from '../firebase';
import { doc, setDoc } from "firebase/firestore";


const Signup = () => {
  
  const onFinish = async ({ password, email }) => {
      try {
          const user = await createUserWithEmailAndPassword(auth, email, password);
          console.log(user);
          alert("Account created successfully.")
        .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    setDoc(doc(db, "users",user.uid), {
      name: email,
      id: user.uid,
      
    });
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });  
      } catch (error) {
          console.log(error.message);
      }
      
  };
    return (
        <div className="form">
            <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      autoComplete="off"
      onFinish={onFinish}

    >
        <div className="heading"><h1>Signup</h1></div>
      <Form.Item
        label="Full Name"
        name="fullname"
        rules={[{ required: true, message: 'Please input your full name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your email!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Sign Up
        </Button>
        <div>
        {'\n'}
        <Link to="/">You have already account?</Link>
        </div>
      </Form.Item>
    </Form>
        </div>
    )
}

export default Signup;