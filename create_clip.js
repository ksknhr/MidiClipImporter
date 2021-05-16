autowatch = 1
inlets = 1
outlets = 1


function createClip(track_id, clip_id, length){
    id_path = "live_set tracks " + track_id +  " clip_slots " + clip_id;
    var clipSlotApit = new LiveAPI(id_path);

    clipSlotApit.call("delete_clip");
    clipSlotApit.call("create_clip", length);

    outlet(0,"createMidiClip", track_id, clip_id);
}