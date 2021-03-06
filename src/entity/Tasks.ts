import { Entity, Column, UpdateDateColumn, CreateDateColumn, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
export default class Task{
    @PrimaryGeneratedColumn()
    id: number
    @Column()
    title: string
    @Column()
    description: string
    @Column({default:false})
    finished: boolean
    @CreateDateColumn()
    created_at: Date
    @UpdateDateColumn()
    updated_at: Date
}

