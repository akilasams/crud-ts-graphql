import { GraphQLList } from 'graphql';
import {UserType} from '../types/User';
import { Users } from '../../entities/Users';

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve(){
        return Users.find();
    }
}