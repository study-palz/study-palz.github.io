// src/types/supabase.ts

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[]

export interface Database {
  public: {
    Tables: {
      courses: {
        Row: {
          id: string
          code: string
          name: string
          created_at: string
        }
        Insert: {
          id?: string
          code: string
          name: string
          created_at?: string
        }
        Update: {
          id?: string
          code?: string
          name?: string
          created_at?: string
        }
      }
      sessions: {
        Row: {
          id: string
          course_id: string
          topic: string
          description: string
          start_time: string
          end_time: string
          created_at: string
        }
        Insert: {
          id?: string
          course_id: string
          topic: string
          description: string
          start_time: string
          end_time: string
          created_at?: string
        }
        Update: {
          id?: string
          course_id?: string
          topic?: string
          description?: string
          start_time?: string
          end_time?: string
          created_at?: string
        }
      }
      users: {
        Row: {
          id: string
          email: string
          name: string
          role: string
          profile_picture?: string
          points: number
        }
        Insert: {
          id?: string
          email: string
          name: string
          role: string
          profile_picture?: string
          points?: number
        }
        Update: {
          id?: string
          email?: string
          name?: string
          role?: string
          profile_picture?: string
          points?: number
        }
      }
    }
    Views: {}
    Functions: {}
    Enums: {
      Role: "GRASSHOPPER" | "SENSEI" | "ADMIN"
    }
    CompositeTypes: {}
  }
}