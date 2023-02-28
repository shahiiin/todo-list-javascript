window.addEventListener('load', () => {

	const form = document.querySelector("#new-task-form");
	const list_el = document.querySelector("#tasks");

	form.addEventListener('submit', (e) => {
		e.preventDefault();
	

		const input = document.querySelector("#new-task-input");
		data(input.value);

		const task = input.value;
		const task_el = document.createElement('div');
		task_el.classList.add('task');

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

		const remove = document.createElement('button');
		remove.classList.add('delete');
		remove.innerText = 'Delete';

		task_actions_el.appendChild(remove);

		task_el.appendChild(task_actions_el);

		list_el.appendChild(task_el);

		input.value = '';

		remove.addEventListener('click', (e) => {
						list_el.removeChild(task_el);
					});


	})

	function data(task) {
		fetch('http://localhost:3000/user', {
			method: "POST",
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				name: task,
			})
		})
			.then(res => console.log(res.json()))
			.catch(err => {
				console.log(err, 'data is undifind')
			})

	}
})






