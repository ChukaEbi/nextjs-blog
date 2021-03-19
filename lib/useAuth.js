import axios from 'axios';
import supabase from '../supabase';

const useAuth = () => {

  const signUp = async (email, name, password) => {


  }

  const addToWingback = async(user, plan_id = 20) => {
    let { response } = axios.post("localhost:3001/api")
  }
}