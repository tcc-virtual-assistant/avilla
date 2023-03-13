from fastapi import APIRouter, Response
import ormar

from model.schedule import Schedule
from model.requests.schedule_update import ScheduleUpdate

router = APIRouter()

@router.post('/')
async def add_schedule(schedule: Schedule):
    await schedule.save()
    return schedule

@router.get('/')
async def list_schedule():
    return await Schedule.objects.all()

@router.get('/{schedule_id}')
async def get_schedule(schedule_id: int, response: Response):
    try:
        schedule = await Schedule.objects.get(id = schedule_id)
        return schedule
    except ormar.exceptions.NoMatch:
        response.status_code = 404
        return {'mensagem' : 'Entidade não encontrada'}

@router.patch('/{schedule_id}')
async def path_schedule(propriedades_atualizacao: ScheduleUpdate, schedule_id: int, response: Response):
    try:
        schedule_salvo = await Schedule.objects.get(id = schedule_id)
        propriedades_atualizadas = propriedades_atualizacao.dict(exclude_unset=True)
        await schedule_salvo.update(**propriedades_atualizadas)
        return schedule_salvo
    except ormar.exceptions.NoMatch:
        response.status_code = 404
        return {'mensagem' : 'Entidade não encontrada'}

@router.delete('/{schedule_id}')
async def delete_schedule(schedule_id: int, response: Response):
    try:
        schedule = await Schedule.objects.get(id = schedule_id)
        return await schedule.delete()
    except:
        response.status_code = 404
        return {'mensagem' : 'Entidade não encontrada'}