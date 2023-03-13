from fastapi import APIRouter

from controllers import schedule_controller as schedule

router = APIRouter()

router.include_router(schedule.router, prefix = '/schedule')