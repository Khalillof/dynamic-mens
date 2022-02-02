/* import express from 'express';
import {DefaultController} from '../controllers/default.controller';
import {returnJson} from "../common/customTypes/types.config";
import {DefaultRoutesConfig} from './default.routes.config'
import { AuthController } from 'src/controllers/auth.controller';
//app, '/auth',  AuthController
export async function AuthRoutes(app: express.Application){
    return await DefaultRoutesConfig.instance(app,'/auth', await AuthController.createInstance(), function(self:DefaultRoutesConfig):void{
          self.defaultRoutes();
    
            self.app.route('/auth').options(self.corsWithOption, (req, res) => { res.sendStatus(200); } )
            .get(self.corsWithOption,(req, res, next) => {
                returnJson({message:'operation not supported '},403,res);
            }
            ).post(self.corsWithOption, (req, res, next) => {
                returnJson({message:'operation not supported '},403,res);
            })
            .put(self.corsWithOption,(req, res, next) => {
                returnJson({message:'operation not supported '},403,res);
            })
            .delete(self.corsWithOption, (req, res, next) => {
                returnJson({message:'operation not supported '},403,res);
            });
    
            self.app.route('/auth/refresh-token').post(
                self.corsWithOption,
                self.controller.createJWT
            ).get(self.corsWithOption, (req, res, next) => {
                returnJson({message:'operation not supported '},403,res);
            })
            .put(self.corsWithOption,(req, res, next) => {
                returnJson({message:'operation not supported '},403,res);
            })
            .delete(self.corsWithOption, (req, res, next) => {
                returnJson({message:'operation not supported '},403,res);
            });
        });
};
*/