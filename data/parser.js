import * as fs from 'fs'
import TOML from "@iarna/toml"
import dotenv from 'dotenv'
import * as path from 'path'
export const config = (fileToPath) => {let jsonContent = JSON.parse(fs.readFileSync(new URL(fileToPath, import.meta.url)), "utf-8"); return jsonContent;}
export const toml = (fileToPath) => {let tomlContent = TOML.parse(fs.readFileSync(new URL(fileToPath, import.meta.url)), "utf-8"); return tomlContent}
export const token = (fileToPath) => {
    dotenv.config({path: path.resolve((new URL(fileToPath, import.meta.url).pathname.replace('/home/kami/Documents/Eris/data', '.')), '.env')});
    return process.env.token
}
/* let jsonFile = './config.json'
config(jsonFile) */
export const prefix = (fileToPath) => {
    dotenv.config({path: path.resolve((new URL(fileToPath, import.meta.url).pathname.replace('/home/kami/Documents/Eris/data', '.')), '.env')});
    return process.env.prefix
}
//dotenv.config({path: path.resolve('data', '.env')}) working one
