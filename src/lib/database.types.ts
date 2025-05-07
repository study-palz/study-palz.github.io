// src/lib/database.types.ts

export type Json = string | number | boolean | null | { [key: string]: Json } | Json[]

export interface Database {
  public: {
    Tables: {
      Course: {
        Row: {
          id: number
          code: string
          title: string
          description: string | null
        }
        Insert: {
          id?: number
          code: string
          title: string
          description?: string | null
        }
        Update: {
          id?: number
          code?: string
          title?: string
          description?: string | null
        }
      }
      Session: {
        Row: {
          id: number
          course_id: number
          topic: string
          description: string | null
          start_time: string
          end_time: string
        }
        Insert: {
          id?: number
          course_id: number
          topic: string
          description?: string | null
          start_time: string
          end_time: string
        }
        Update: {
          id?: number
          course_id?: number
          topic?: string
          description?: string | null
          start_time?: string
          end_time?: string
        }
      }
      Messages: {
        Row: {
          id: number
          session_id: number
          user_id: string
          content: string
          inserted_at: string
        }
        Insert: {
          id?: number
          session_id: number
          user_id?: string
          content: string
          inserted_at?: string
        }
        Update: {
          id?: number
          session_id?: number
          user_id?: string
          content?: string
          inserted_at?: string
        }
      }
    }
    Views: {}
    Functions: {}
    Enums: {}
  }
}