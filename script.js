window.addEventListener('load', () => {


  function getAllTodos() {
    return fetch('http://localhost:3000/user', {
      method: 'GET',
    })
  }

  async function renderTodoList() {
    try {
      const res = await getAllTodos();
      const data = await res.json();
      console.log(data, 'data is here');

      data.forEach((item) => {
          const task_el = document.createElement('div');
          task_el.classList.add('task');
          task_el.setAttribute('id', item.id);

          const task_content_el = document.createElement('div');
          task_content_el.classList.add('content');

          task_el.appendChild(task_content_el);
          const task_input_el = document.createElement('input');
          task_input_el.classList.add('text');
          task_input_el.type = 'text';
          task_input_el.value = item.name;
          task_input_el.setAttribute('readonly', 'readonly');

          task_content_el.appendChild(task_input_el);

          const task_actions_el = document.createElement('div');
          task_actions_el.classList.add('actions');

          const task_delete_el = document.createElement('button');
          task_delete_el.classList.add('delete');
          task_delete_el.innerText = 'Delete';
          task_delete_el.addEventListener('click', () => handleRemoveTask(item.id))

          task_actions_el.appendChild(task_delete_el);

          task_el.appendChild(task_actions_el);

          list_el.appendChild(task_el);
        }
      )

    } catch (e) {
      console.log('error is here')
    }
  }

  renderTodoList();


  const form = document.querySelector("#new-task-form");
  const list_el = document.querySelector("#tasks");

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    try {
      const input = document.querySelector("#new-task-input");
      const res = await createTask(input.value);
      const data = await res.json();

      const task = input.value;
      const task_el = document.createElement('div');
      task_el.classList.add('task');
      task_el.setAttribute('id', data.id);

      const task_content_el = document.createElement('div');
      task_content_el.classList.add('content');

      task_el.appendChild(task_content_el);
      const task_input_el = document.createElement('input');
      task_input_el.classList.add('text');
      task_input_el.type = 'text';
      task_input_el.value = task;
      task_input_el.setAttribute('readonly', 'readonly');

      task_content_el.appendChild(task_input_el);

      const task_actions_el = document.createElement('div');
      task_actions_el.classList.add('actions');

      const task_delete_el = document.createElement('button');
      task_delete_el.classList.add('delete');
      task_delete_el.addEventListener('click', () => handleRemoveTask(data.id))
      task_delete_el.innerText = 'Delete';

      task_actions_el.appendChild(task_delete_el);

      task_el.appendChild(task_actions_el);

      list_el.appendChild(task_el);

      input.value = '';

      task_delete_el.addEventListener('click', (e) => {
        list_el.removeChild(task_el);
      });
    } catch (e) {
      console.log('error is here')
    }


  })

  function createTask(task) {
    return fetch('http://localhost:3000/user', {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: task,
      })
    })
  }

  async function handleRemoveTask(id) {
    try {
      await removeTask(id);
      const selected_task = document.getElementById(id);
      selected_task.parentNode.removeChild(selected_task);
    } catch (e) {
      console.log(e, 'error is here');
    }
  }

  function removeTask(taskId) {
    return fetch(`http://localhost:3000/user/${taskId}`, {
      method: "DELETE",
    })
  }


});






