# Infrastack Component Lib

- Open the terminal, run 

```pnpm dev```
- Open another terminal, run 

```pnpm dlx tailwindcss -i ./styles/globals.css -o ./styles/tw-output.css --watch```
- This will be enough for the library part. If you want to test the DB functionalities, you should have a postgres DB running in localhost:5432, with
    credentials postgres:postgres
- I used docker in my project, If you would like to do so:
- Open another terminal, run 

```docker run -e POSTGRES_USER=postgres -e POSTGRES_DB=postgres -e POSTGRES_PASSWORD=postgres --name=infrastack-postgres postgres:latest```
- To enter the terminal of the DB to create the required table, run the following

```docker exec -it $(docker container ls -q --filter 'name=infrastack-postgres') bash```

```psql -U postgres```
```create table templates
(
    id          serial
        constraint templates_pk
            primary key,
    title       varchar(100),
    layout_data varchar(500),
    created_at  timestamp default CURRENT_TIMESTAMP,
    chart_count integer,
    chart_data  varchar(500)
);

alter table templates
    owner to postgres;
```
- You can now use the demo or make development on it.