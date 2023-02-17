import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommonService } from './common.service';

@Module({
  imports: [
      ConfigModule.forRoot({isGlobal: true}),
      TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: async (configService: ConfigService) => ({
          
            type:'postgres',
            username:'postgres',
            password:'sharu',
            port:5432,
            host:'127.0.0.1',
            database:'microservice_db',
            synchronize:true,
            autoLoadEntities:true,
            entities: ['dist/**/*.entity{.ts,.js}'],
        
     }),
        inject: [ConfigService],
      }), 
  ],
  providers: [CommonService],
  exports: [CommonService],
})
export class CommonModule {}
