from django.shortcuts import render,redirect
from .models import Task
# Create your views here.

def index(request):

    tasks=Task.objects.all()

    if request.method == 'POST':
        workk = request.POST['inpp']
        newTask = Task(work=workk)
        newTask.save()
        
        return render(request,'index.html',{'tasks':tasks})

    return render(request,'index.html',{'tasks':tasks})

def dell(request,pk):
    delTask=Task.objects.get(pk=pk)
    delTask.delete()
    return redirect('/')