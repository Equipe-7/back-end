/*import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { UsersService } from 'src/users/users.service';
import { JwtPayload } from './jwt.strategy';


export interface RegistrationStatus {  
    success: boolean;  
    message: string;
}
@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private readonly jwtService: JwtService,  ) {}
    
    async register(userDto: CreateUserDto): Promise<RegistrationStatus> {
        let status: RegistrationStatus = {
            success: true,   
            message: 'user registered',
        };
        try {
            await this.usersService.create(userDto);
        } catch (err) {
            status = {
                success: false,        
                message: err,
            };    
        }
        
        return status;  
    };


    async login(loginUserDto: loginUserDto): Promise<LoginStatus> {    
        // Encontra o usuário no banco de dados
        const user = await this.usersService.findByLogin(loginUserDto);
        
        // Gera e assina o Token    
        const token = this._createToken(user);
        
        return {
            username: user.username, ...token,    
        };  
    };
    
    async login(loginUserDto: LoginUserDto): Promise<LoginStatus> {    
        // Encontra o usuário no banco de dados
        const user = await this.usersService.findByLogin(loginUserDto);
        
        // Gera e assina o Token    
        const token = this._createToken(user);
        
        return {
            username: user.username, ...token,    
        };  
    };
    
    private _createToken({ username }: UserDto): any {
        const user: JwtPayload = { username };    
        const accessToken = this.jwtService.sign(user);    
        return {
            expiresIn: process.env.EXPIRESIN,
            accessToken,    
        };  
    };

    async validateUser(payload: JwtPayload): Promise<UserDto> {
        const user = await this.usersService.findByPayload(payload);    
        if (!user) {
            throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);    
        }    
        return user;  
    }
}*/