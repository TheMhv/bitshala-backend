import {
    IsDateString,
    IsEnum,
    IsInt,
    IsNotEmpty,
    IsNumberString,
    IsOptional,
} from 'class-validator';
import { CohortType } from '@/common/enum';

export class UpdateCohortRequestDto {
    @IsOptional()
    @IsDateString({ strict: true })
    startDate?: string;

    @IsOptional()
    @IsDateString({ strict: true })
    registrationDeadline?: string;
}

export class CreateCohortRequestDto {
    @IsEnum(CohortType)
    type!: CohortType;

    @IsDateString({ strict: true })
    startDate!: string;

    @IsDateString({ strict: true })
    registrationDeadline!: string;

    @IsInt()
    maxParticipants!: number;
}

export class UpdateCohortWeekRequestDto {
    @IsOptional()
    @IsNumberString({
        no_symbols: true,
        locale: 'en-US',
    })
    @IsNotEmpty()
    classroomAssignmentId!: string | undefined;

    @IsOptional()
    @IsDateString({ strict: true })
    scheduledDate!: string | undefined;

    @IsInt()
    maxParticipants!: number;
}

export class JoinWaitlistRequestDto {
    @IsEnum(CohortType)
    type!: CohortType;
}
