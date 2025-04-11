import { Injectable, OnModuleInit } from '@nestjs/common';
import Parse from 'parse/node';

@Injectable()
export class ParseService implements OnModuleInit {
  onModuleInit() {
    Parse.initialize(process.env.PARSE_APP_ID, process.env.PARSE_CLIENT_KEY);
    Parse.serverURL = process.env.PARSE_SERVER_URL;
  }

  async createItem(className: string, data: Record<string, any>) {
    const Item = Parse.Object.extend(className);
    const item = new Item();
    Object.entries(data).forEach(([key, value]) => item.set(key, value));
    return await item.save();
  }
}
