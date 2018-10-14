import mongoose from 'mongoose';

//import models
import Todo from '../models/model';

export const getTodos = (req,res) => {
  Todo.find().exec((err,todos) => {
    if(err){
    return res.json({'success':false,'message':'Some Error'});
    }

return res.json({'success':true,'message':'Todos fetched successfully',todos});
  });
}