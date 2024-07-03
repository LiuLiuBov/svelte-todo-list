<svelte:head>
    <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</svelte:head>

<script>
    let toDoList = [];
    let textInput = "";

    function addToDo() {
        if (textInput.trim() === "") {
            alert("ToDo cannot be empty!");
            return;
        }
        toDoList = [...toDoList, { content: textInput, editing: false, checked: false }];
        textInput = "";
    }

    function setEditing(i, isEditing) {
        toDoList[i].editing = isEditing;
    }

    function saveEditedToDo(i) {
        if (toDoList[i].content.trim() === "") {
            alert("ToDo cannot be empty!");
            return;
        }
        setEditing(i, false);
    }

    function deleteTodo(i) {
        toDoList.splice(i, 1);
        toDoList = toDoList;
    }
</script>

<div class="container mt-5">
    <div class="card">
        <div class="card-body">
            <h2 class="card-title text-center">ToDo List</h2>
            <p>Enter your ToDo here</p>
            <div class="input-group mb-3">
                <input type="text" class="form-control" bind:value={textInput} placeholder="New ToDo">
                <div class="input-group-append">
                    <button class="btn btn-primary" on:click={addToDo}>Add</button>
                </div>
            </div>
        </div>
    </div>

    {#each toDoList as toDo, i}
        <div class="card mt-3">
            <div class="card-body d-flex align-items-center">
                {#if toDo.editing}
                    <input type="text" class="form-control mr-3" bind:value={toDo.content}>
                {:else}
                    <input type="checkbox" class="mr-3" bind:checked={toDo.checked}>
                    <h4 class="flex-grow-1">{toDo.content}</h4>
                {/if}
                <div class="btn-group">
                    {#if toDo.editing}
                        <button class="btn btn-success" on:click={() => saveEditedToDo(i)}>Save</button>
                    {:else}
                        <button class="btn btn-secondary" on:click={() => setEditing(i, true)}>Edit</button>
                    {/if}
                    <button class="btn btn-danger" on:click={() => deleteTodo(i)}>Delete</button>
                </div>
            </div>
        </div>
    {/each}
</div>

<style>
    .container {
        max-width: 700px;
    }
</style>
