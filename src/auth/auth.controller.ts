/*import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService, RegistrationStatus } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('register')  
    public async register(@Body() createUserDto: CreateUserDto,  ): Promise<RegistrationStatus> {    
        const result: RegistrationStatus = await this.authService.register(createUserDto,);
        if (!result.success) {
            throw new HttpException(result.message, HttpStatus.BAD_REQUEST);    
        }
        return result;  
    };

    @Post('login')  
    public async login(@Body() loginUserDto: loginUserDto): Promise<LoginStatus> {
        return await this.authService.login(loginUserDto);  
    }
}
*/